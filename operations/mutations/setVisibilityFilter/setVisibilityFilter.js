import { VisiblityFilter } from "../../../models/VisibilityFilter";
import { ReactiveVar } from "@apollo/client";

export default visibilityFilterVar => {
  return filter => {
    visibilityFilterVar(filter);
  };
};
