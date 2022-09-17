export function capitalize(str) {
  const first_letter = str.charAt(0).toUpperCase();
  return first_letter + str.slice(1);
}

export function handle_no_year(year) {
  if (!year) {
    return "Present";
  }
  return year;
}

function format_month(month) {
  return capitalize(month.slice(0, 3));
}

export function get_date(item) {
  const start_date = `${format_month(item.start_date.month)} ${
    item.start_date.year
  }`;
  var end_date;

  if (!item.end_date.year) {
    end_date = "Present";
  } else {
    end_date = `${format_month(item.end_date.month)} ${item.end_date.year}`;
  }

  return [start_date, end_date];
}
