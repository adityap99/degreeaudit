import { dataOfStudents, studentCreditRequirement } from './studentDatabase';
import {findBatch} from '../utils';

export const getStudentDetails = id => {
  const batch = findBatch(id);
  if(dataOfStudents[`${batch}`] && dataOfStudents[`${batch}`][`${id}`])
    return dataOfStudents[`${batch}`][`${id}`];
  return 'details not available';
};

export const getCreditRequirements = id => {
  const batch = findBatch(id);
  if(studentCreditRequirement[`${batch}`])
    return studentCreditRequirement[`${batch}`];
  return 'details not available';
};

export const getCreditRequirementsByBatch = batch => {
  if(studentCreditRequirement[`${batch}`])
    return studentCreditRequirement[`${batch}`];
  return 'details not available';
};
