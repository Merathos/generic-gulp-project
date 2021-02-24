import { Checkbox, RadioButton } from 'elements';
import { CustomScrollbars } from 'components';
import { queryHelpers } from 'helpers/query-helpers';
import { useRouter } from 'next/router';
import { Title, Item, List, Wrapper, Sup } from './styles';

const { checkTagActive } = queryHelpers;

const Dropdown = (props) => {
  const {
    title,
    list,
    multi,
    opened,
    handleOpen,
    category,
    handleChangeCheckbox,
    handleChangeRadio,
    withBg = false,
  } = props;
  const router = useRouter();
  const { query } = router;

  return (
    <>
      <Title type="button" onClick={() => handleOpen()} active={opened}>
        {title}
        {title === 'Категории' && query.categories && <Sup>1</Sup>}
        {title === 'Технологии' && query.technologies?.length > 0 && (
          <Sup>
            {typeof query.technologies === 'string'
              ? '1'
              : query.technologies?.length || ''}
          </Sup>
        )}
        {title === 'Команды' && query.teams?.length > 0 && (
          <Sup>
            {typeof query.teams === 'string' ? '1' : query.teams?.length || ''}
          </Sup>
        )}
      </Title>
      <Wrapper style={{ display: opened ? 'block' : 'none' }} withBg={withBg}>
        <List>
          <CustomScrollbars>
            {Object.keys(list).map((key) => {
              const isActive = checkTagActive(query[category], list[key].slug);
              return (
                <Item key={list[key].id}>
                  {multi ? (
                    <Checkbox
                      name={list[key].name}
                      id={list[key].slug}
                      handleChange={() =>
                        handleChangeCheckbox(list[key].slug, isActive, category)
                      }
                      type="dropdown"
                      checked_state={isActive}
                    />
                  ) : (
                    <RadioButton
                      name={title}
                      handleChange={(e) => handleChangeRadio(e)}
                      value={list[key].slug}
                      label={list[key].name}
                      checked={query[category] === list[key].slug}
                    />
                  )}
                </Item>
              );
            })}
          </CustomScrollbars>
        </List>
      </Wrapper>
    </>
  );
};

export default Dropdown;
