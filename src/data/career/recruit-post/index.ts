import { recruit_fe_engineer } from "./fe-engineer";
import { recruit_be_engineer } from "./be-engineer";

const recruit: Record<string, RecruitPost> = {
  fe_engineer: recruit_fe_engineer,
  be_engineer: recruit_be_engineer,
};

export default recruit;
