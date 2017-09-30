var d1 = Date.today()
    .set({ day: 15, hour: 16, minute: 30 })
    .add({ days: 90 })
if (!d1.isWeekday()) {
    d1.next().monday();
}
