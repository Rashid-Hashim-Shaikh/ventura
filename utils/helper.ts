import { isAfter, isBefore, isEqual, parse, format } from 'date-fns';

// Function to format date range
export const formatDateRange = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Formatting start and end dates
  const formattedStartDate = format(start, 'dd MMM yyyy');
  const formattedEndDate = format(end, 'dd MMM yyyy');

  // If the years are the same, omit the year for the start date
  if (start.getFullYear() === end.getFullYear()) {
    const formattedStartWithoutYear = format(start, 'dd MMM');
    return `${formattedStartWithoutYear} - ${formattedEndDate}`;
  }

  // Otherwise, include years for both start and end
  return `${formattedStartDate} - ${formattedEndDate}`;
};

// convert date to "04 OCT 2022" format
export const formatDate = (input: string) => {
  const date = new Date(input)
  return format(date, 'dd MMM yyyy')
}

// Get current step id
export const getCurrentStep = (timelines) => {
  let stepId = 0;
  const currentDate = new Date();

  timelines.forEach((timeline) => {
    const timelineDate = parse(timeline.value, 'dd MMM yyyy', currentDate);

    // check if the timeline date is before or equal to current date
    if(isBefore(timelineDate, currentDate) || isEqual(timelineDate, currentDate)){
      stepId = timeline.id;
    }
  })
  return stepId;
}
