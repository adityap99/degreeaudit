import { loginCredentialsForStudents, loginCredentialsForAdmin, loginCredentialsForSPC } from './loginDatabase';

export const authoriseUser = (id, password) => {
  if(loginCredentialsForStudents[`${id}`] && loginCredentialsForStudents[`${id}`] === password)
    return 'student';
  if(loginCredentialsForAdmin[`${id}`] && loginCredentialsForAdmin[`${id}`] === password)
    return 'admin';
  if(loginCredentialsForSPC[`${id}`] && loginCredentialsForSPC[`${id}`] === password)
    return 'SPC';
  return false;
};
