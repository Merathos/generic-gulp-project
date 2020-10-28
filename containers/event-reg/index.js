import * as S from './styles';
import { useEffect } from 'react';
import InnerHTML from 'dangerously-set-html-content';

const EventReg = props => {
  const timepadForm = `
  <script id="form-script" type="text/javascript" async="async" defer="defer" charset="UTF-8"
  src="https://timepad.ru/js/tpwf/loader/min/loader.js" data-timepad-customized="134610"
  data-twf2s-event--id="1464460" data-timepad-widget-v2="event_register">
    (function () {
      return {
        "loadCSS": [
          "/styles/timepad.css"
        ],
        "skipBaseCSS": false,
        "disableBootstrap": false,
        "overrideTemplates": {
          "main": "#mainTplMy",
          "_ank": "#ankTplMy",
          "_selectTickets": "#selectTicketsTplMy",
          "_question": "#questionTplMy"
        }
      };
    })();
  </script>
  `;

  const mainTpl = `
  <script type="text/mustache" id="mainTplMy">
  <div class="i-page">
  {{#event.is_recurring}}
  <div class="b-registration__section b-registration__section_indent">
  <div class="b-date-choice__day">
  {{selectedRecurringEvent.date_h}}
  <a class="js-open-date-choice b-date-choice__select-date" href="#">Выбрать другую дату</a>
  </div>
  </div>
  {{/event.is_recurring}}
  <div class="b-registration__section">
  {{#event.name}}
  <h2 class="event__title">{{event.name}}</h2>
  {{/event.name}}
  <div class="location">
  {{#event.date_human}}
  <p class="event__date">{{event.date_human}}</p>
  {{/event.date_human}}
  {{#event.city}}
  <p class="location__place">{{event.place}}</p>
  {{/event.city}}
  </div>

  {{#event.texts.reg_desc}}
  <p class="b-reg-descr">{{{event.texts.reg_desc}}}</p>
  {{/event.texts.reg_desc}}
  </div>
  {{> _promocodeBlock}}
  <form id="eventreg_form" action="{{event.domain}}event/widget_register/{{event.id}}">
  {{#event.uses_places}}
  {{#event.has_active_places}}
  {{> _seatcheck}}
  {{/event.has_active_places}}
  {{/event.uses_places}}
  {{> _selectTickets}}

  {{^event.promocode_locked}}

  {{#event.uses_multiank}}
  <div class="b-registration__section hide section-multiankadd">
  <div class="b-add-attendees">
  <a class="b-pro-wiget__reg-button b-pro-widget__reg-button_multiank add-attendees" href="">Заполнить анкеты</a>
  </div>
  </div>
  {{/event.uses_multiank}}

  <div class="b-registration__section b-registration__section_no-bottom-space">
  <div class="b-registration__error hide"></div>
  </div>

  {{> _ank }}
  {{/event.promocode_locked}}

  </form>

  <div class="b-registration__bottom"></div>

  </div>
  </script>
  `;

  const ticketTpl = `
  <script type="text/mustache" id="selectTicketsTplMy">
  <div class="b-registration__section js-section-selectTickets">
  {{#event.uses_ticket_choice}}
  {{#event.tickets.length}}
  <h5 class="b-unit__header_size_small b-registration__header b-indentable">
  {{#event.uses_multireg}}
  Билет на мероприятие
  {{/event.uses_multireg}}

  {{^event.uses_multireg}}
  {{#event.has_active_places}}
  Или выберите тип билета:
  {{/event.has_active_places}}

  {{^event.has_active_places}}
  Билет на мероприятие
  {{/event.has_active_places}}
  {{/event.uses_multireg}}
  </h5>
  {{/event.tickets.length}}
  {{/event.uses_ticket_choice}}

  {{^event.promocode_locked}}
  <div class="row-fluid b-reg-table b-reg-table_type_striped">
  <div class="span12">
  {{#event.uses_ticket_choice}}
  {{#event.tickets.length}}
  <div class="row-fluid b-reg-table__row b-reg-table__row_header">
  <div class="{{#event.uses_multireg}}span6{{/event.uses_multireg}}{{^event.uses_multireg}}span9{{/event.uses_multireg}} b-reg-table__cell b-reg-table__cell-name">
  <h3 class="b-reg-table__header b-reg-table__text">Тип билета</h3>
  </div>

  {{#event.uses_multireg}}
  <div class="span2 b-reg-table__cell b-reg-table__cell-count">
  <h3 class="b-reg-table__header b-reg-table__text">
  <span>Количество</span>
  </h3>
  </div>
  {{/event.uses_multireg}}

  <div class="span3 b-reg-table__cell b-reg-table__cell-price">
  <h3 class="b-reg-table__header b-reg-table__text">Цена</h3>
  </div>
  </div>
  {{/event.tickets.length}}

  {{#event.tickets}}
  <div class="row-fluid b-reg-table__row {{#has_promocode}}b-reg-table__row_type_promo{{/has_promocode}}" id="rei_cont_{{id}}">

  <div class="{{#event.uses_multireg}}span6{{/event.uses_multireg}}{{^event.uses_multireg}}span9{{/event.uses_multireg}} b-reg-table__cell b-reg-table__cell-name {{^event.uses_multireg}}b-reg-table__cell-name_full-width{{/event.uses_multireg}}">
  <label class="b-reg-table__text {{^event.uses_multireg}} b-reg-table__text_with_radio{{/event.uses_multireg}}" for="rei_{{id}}">
  {{^event.uses_multireg}}
  <input {{#force_check}}checked="checked"{{/force_check}} type="radio" class="b-reg-table__select b-radio_where_table" name="re_id" data-reid="{{id}}" value="{{id}}" id="rei_{{id}}" {{^available}}disabled="disabled"{{/available}}>
  {{/event.uses_multireg}}
  {{{name}}}
  </label>

  <div class="js-reg-table-pricing b-reg-table__price-mobile{{^event.uses_multireg}} b-reg-table__price-mobile_non-multireg{{/event.uses_multireg}}">
  <span class="js-reg-table-price">{{h_price}}</span>
  <span class="js-reg-table-discount b-reg-table__price-discount">{{h_discount}}</span>
  </div>

  {{#comment}}
  <span class="help-block b-reg-table__category-description
  {{^event.uses_multireg}}b-reg-table__category-description_type_multireg{{/event.uses_multireg}}">{{{comment}}}</span>
  {{/comment}}

  {{#text_tickets_remain}}
  <span class="help-block b-reg-table__category-description
  {{^event.uses_multireg}}b-reg-table__category-description_type_multireg{{/event.uses_multireg}}">{{{text_tickets_remain}}}</span>
  {{/text_tickets_remain}}

  {{^event.uses_multireg}}
  <span class="help-block b-reg-table__category-description b-reg-table__category-description_type_multireg">Закрытие регистрации {{ttl}}</span>
  {{/event.uses_multireg}}
  </div>

  <div class="{{#event.uses_multireg}}span2{{/event.uses_multireg}}{{^event.uses_multireg}}span4{{/event.uses_multireg}} b-reg-table__cell b-reg-table__cell-count">
  {{#available}}
  {{#event.uses_multireg}}
  {{^settings.use_plusminus}}
  <select class="b-reg-table__select" name="res[{{id}}]" data-reid="{{id}}" id="rei_{{id}}">
  <option value="0">&mdash;</option>
  {{#ticket_choices}}
  <option value="{{val}}" {{#selected}}selected="selected"{{/selected}}>{{val}}</option>
  {{/ticket_choices}}
  </select>
  {{/settings.use_plusminus}}

  {{#settings.use_plusminus}}
  <div class="b-reg-table__plusminus js-plusminus" data-plusminus-min="{{min}}" data-plusminus-max="{{max}}">
  <button class="b-reg-table__plusminus_btn not-touch js-svoge-fallback js-plusminus_minus" type="button">
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.5 1.19238L2 5.69238L6.5 10.1924" stroke="currentColor" stroke-width="2"/>
  </svg>
  </button>

  <span class="b-reg-table__plusminus-value js-plusminus_display">{{default_count}}</span>

  <input class="js-tickets_count_input js-plusminus_value" type="hidden" name="res[{{id}}]" data-reid="{{id}}" id="rei_{{id}}" autocomplete="nein" value="{{default_count}}">

  <button class="b-reg-table__plusminus_btn js-svoge-fallback not-touch js-plusminus_plus" type="button">
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.5 10.2217L9 5.72168L4.5 1.22168" stroke="currentColor" stroke-width="2"/>
  </svg>
  </button>
  </div>
  {{/settings.use_plusminus}}
  {{/event.uses_multireg}}
  <span class="hide multiank_counter b-reg-table__text">0</span>
  {{/available}}
  {{^available}}
  недоступно
  {{/available}}
  </div>

  <div class="span3 span3_fixed-width b-reg-table__cell b-reg-table__cell-price">
  <span class="b-reg-table__text b-not-bold js-reg-table-price">{{h_price}}</span>
  <p class="b-reg-table__text js-reg-table-discount">{{h_discount}}</p>
  </div>

  </div>
  {{/event.tickets}}
  {{/event.uses_ticket_choice}}

  {{^event.uses_ticket_choice}}
  {{#event.tickets}}
  <input type="hidden" name="re_id" class="b-reg-table__hidden" data-reid="{{id}}" value="{{id}}" id="rei_{{id}}">
  {{/event.tickets}}
  {{/event.uses_ticket_choice}}
  </div>
  </div>
  {{/event.promocode_locked}}
  </div>
  </script>
  `;

  const ankTpl = `
  <script type="text/mustache" id="ankTplMy">
  <div class="b-registration__section b-registration__section_indent section-ank js-section-ank">
  <h5 class="contacts__title">Оставь контактные данные</h5>
  {{#event.uses_order_email}}
  <div class="row-fluid">
  <div class="control-group b-reg-row" data-formname="order_mail">
  <label class="b-unit__text b-registration__question">
  E-mail заказчика <span class="b-registration__question_mandatory">*</span>
  </label>

  <div class="b-input-block i-question-control">
  <input type="text" name="order_mail" class="span12 b-input" autocomplete="nein" value="{{{prefill.order.order_mail}}}">
  </div>
  </div>
  </div>
  {{/event.uses_order_email}}

  {{#event.has_master_questions}}
  <div class="b-attendee-divide">
  {{#event.master_questions}}
  {{> _question}}
  {{/event.master_questions}}
  </div>
  {{/event.has_master_questions}}

  <div class="b-attendees">
  {{#attendees}}
  {{> _attendee_form}}
  {{/attendees}}
  </div>

  {{#event.uses_multiank}}
  {{#event.has_active_regular_tickets}}
  <div class="b-multiank-attendee">
  <span class="b-add-attendee hide">
  <div class="b-add-attendee-wrap">
  {{#event.uses_ticket_choice}}
  <span class="add-attendee-re">
  {{> _re_selector}}
  </span>
  {{/event.uses_ticket_choice}}
  <a href="#" class="add-attendee">Добавить участника</a>
  </div>
  </span>
  </div>
  {{/event.has_active_regular_tickets}}
  {{/event.uses_multiank}}
  </div>

  <div class="b-registration__section section-submit b-registration__section_indent">
  <div class="b-registration__check">
  {{#event.uses_subscribe}}
  <div class="b-registration__check-block">
  <label class="b-registration__accept">
  <input type="checkbox" name="subscribe" checked="checked">
  <span>Я хочу получать анонсы событий этого организатора по электронной почте</span>
  </label>
  </div>
  {{/event.uses_subscribe}}
  </div>

  <div class="b-registration__check" data-formname="accepted_terms">
  <div class="b-registration__check-block i-question-control">
  <label class="b-registration__accept">
  <input type="checkbox" name="accepted_terms">
  <span>Я подтверждаю свое согласие с условиями <a href="{{event.domain}}/org/user_agreement" target="_blank">Пользовательского соглашения</a> и <a href="{{event.domain}}event/oferta/{{event.id}}" target="_blank">Договором оказания услуг по организации мероприятия и политикой возвратов</a><span class="b-registration__question_mandatory">*</span></span>
  </label>
  </div>
  </div>
  </div> 
  <div class="b-registration__section section-submit b-registration__section_indent js-section-submit">

  <button class="b-pro-wiget__reg-button" name="submit_register" id="eventreg_submit">Зарегистрироваться</button>

  {{> _button_terms_popup}}

  {{#event.uses_acquirings}}
  <div class="b-registration__acquirings b-acquirings js-acquirings">
  {{#show_vkpay_button}}
  <img class="b-acquirings__vkpay" src="{{host}}img/twf2/acquirings/vkpay.png">
  {{/show_vkpay_button}}

  {{#event.acquirings}}
  <img class="b-acquirings__{{.}}" src="{{host}}img/twf2/acquirings/{{.}}.png">
  {{/event.acquirings}}
  </div>
  {{/event.uses_acquirings}}
  </div>
  </script>
  `;

  const questionTpl = `
  <script type="text/mustache" id="questionTplMy">
  <div class="row-fluid row-{{{type}}}">
  <div class="control-group b-reg-row {{#meta.dadata}}js-dadata{{/meta.dadata}}" data-formname="{{formname}}" data-tag="{{{tag}}}" data-type="{{{type}}}">
  <label class="b-unit__text b-registration__question">
  {{{name}}} {{#mandatory}}<span class="b-registration__question_mandatory">*</span>{{/mandatory}}
  </label>
  {{#text}}
  <div class="b-input-block i-question-control">
  <input type="text" name="{{formname}}" class="span12 b-input" autocomplete="nein" value="{{{value}}}" placeholder="{{{name}}} *">
  </div>
  {{/text}}

  {{#bigtext}}
  <div class="b-input-block i-question-control">
  <textarea rows="3" class="span12 b-input b-input_type_textarea" name="{{formname}}" autocomplete="nein">{{{value}}}</textarea>
  </div>
  {{/bigtext}}

  {{#radio}}
  <div class="b-registration__check-block i-question-control">
  {{^meta.radioselect}}
  {{^mandatory}}
  <div class="b-input-block">
  <label class="b-registration__label">
  <input class="b-radio" type="radio" value="0" name="{{formname}}" checked="checked">
  <span>Предпочитаю не указывать</span>
  </label>
  </div>
  {{/mandatory}}
  {{#vars_unfold}}
  <div class="b-input-block">
  <label class="b-registration__label">
  <input class="b-radio" type="radio" value="{{num}}" name="{{formname}}" {{#checked}}checked="checked"{{/checked}}>
  <span>{{text}}</span>
  </label>
  </div>
  {{/vars_unfold}}
  {{/meta.radioselect}}

  {{#meta.radioselect}}
  <div class="b-input-block">
  <select name="{{formname}}">
  {{^mandatory}}
  <option value="0">Предпочитаю не указывать</option>
  {{/mandatory}}
  {{#vars_unfold}}
  <option value="{{num}}" {{#checked}}selected="selected"{{/checked}}>{{text}}</option>
  {{/vars_unfold}}
  </select>
  </div>
  {{/meta.radioselect}}
  </div>
  {{/radio}}

  {{#multivar}}
  <div class="b-registration__check-block i-question-control">
  {{#vars_unfold}}
  <div class="b-input-block">
  <label class="b-registration__label">
  <input type="checkbox" class="b-radio" value="{{num}}" value="{{aname}}" name="{{aname}}" {{#checked}}checked="checked"{{/checked}}>
  <span>{{text}}</span>
  </label>
  </div>
  {{/vars_unfold}}
  </div>
  {{/multivar}}

  {{#upload}}
  <div class="i-question-control">
  <input type="hidden"
  name="{{formname}}"
  role="uploadcare-uploader-outer"
  data-autostore="true"
  data-public-key="{{event.uc_publickey}}"
  data-locale="{{event.locale}}"
  data-tabs="file url dropbox vk"
  data-images-only="false"
  data-path-value="true"
  data-preview-step="false"
  data-clearable="false"
  data-multiple="false"
  data-crop="disabled" />
  </div>
  {{/upload}}


  {{#phone}}
  <div class="b-input-block i-question-control">
  <input type="text" name="{{formname}}" placeholder="{{{name}}} *" data-phone-verify="{{formname}}" class="js-tpphone {{#uses_phone_verify}}js-verify-phone{{/uses_phone_verify}} span12 b-input" value="{{{value}}}">
  </div>
  {{/phone}}

  {{#description}}<span class="help-block b-registration__question_comment">{{{description}}}</span>{{/description}}
  </div>
  </div>

  {{#phone}}
  {{#uses_phone_verify}}
  <div class="row-fluid {{^mandatory}}js-verify-block-hideble hide{{/mandatory}}" data-phone-verify="{{formname}}">
  <div class="control-group b-reg-row">
  <label class="b-unit__text b-registration__question js-verify-label js-verify-label_nophone">Подтверждение телефона</label>
  <div class="twf2-danger-plate js-verify-info js-verify-info-danger twf2-unit" data-phone-verify="{{formname}}" style="display: none;"></div>
  <button class="b-pro-wiget__button b-pro-widget__small-button js-verify-btn" disabled="disabled" type="button" data-phone-verify="{{formname}}">Выслать код по SMS</button>

  <label class="b-unit__text b-registration__question js-verify-label" style="display: none;">Код подтверждения</label>
  <div class="twf2-warning-plate js-verify-info js-verify-info-warning twf2-unit" data-phone-verify="{{formname}}" style="display: none;">
  На указанный номер выслан код. Введите этот код для подтверждения вашего телефона. Если по каким-либо причинам код не пришел, отправить новый код можно по ссылке ниже.
  </div>
  <div class="twf2-success-plate js-verify-info js-verify-info-success twf2-unit" data-phone-verify="{{formname}}" style="display: none;">
  Код верный! Ваш телефон подтвержден, спасибо :)
  </div>
  <input type="text" name="{{phone_verify_formname}}" class="span12 b-input js-verify-code" autocomplete="nein" value="" style="display: none" data-phone-verify="{{formname}}">

  <span class="help-block b-registration__question_comment js-verify-desc js-verify-desc_nophone" data-phone-verify="{{formname}}">Сначала неообходимо ввести телефон</span>
  <span class="help-block b-registration__question_comment js-verify-desc js-verify-desc_preresend" data-phone-verify="{{formname}}" style="display: none;">Повторно отправить код можно будет через <span class="js-verify-timer">00:00</span></span>
  <a href="#" class="help-block b-registration__question_comment js-verify-desc js-verify-desc_resend js-verify-resend" data-phone-verify="{{formname}}" style="display: none;">Отправить код еще раз</a>
  </div>
  </div>
  {{/uses_phone_verify}}
  {{/phone}}
  </script>
  `;

  return (
    <S.Section>
      <S.Container id="form-container">
        <InnerHTML html={mainTpl} />
        <InnerHTML html={ticketTpl} />
        <InnerHTML html={ankTpl} />
        <InnerHTML html={questionTpl} />
        <InnerHTML html={timepadForm} />
      </S.Container>
    </S.Section>
  );
};

export default EventReg;
