const FORMATTER = Intl.DateTimeFormat('es-ES')

export const dateFormatter = (date) => {
  return FORMATTER.format(date)
}
