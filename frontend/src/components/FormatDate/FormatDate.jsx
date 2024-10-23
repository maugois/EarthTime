export default function FormatDate (date = '2024-10-16T11:20:00Z') {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'short'
    }).format(new Date(date));
};