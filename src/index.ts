import { ReminderDatabase } from "./reminder";

const reminderDB = new ReminderDatabase();

reminderDB.createReminder("1", "Meeting", "Project discussion at 10 AM", new Date("2025-03-12"));
reminderDB.createReminder("2", "Doctor's Appointment", "Visit Dr. Smith at 5 PM", new Date("2025-03-11"));

console.log("Reminder 1 exists:", reminderDB.exists("1"));
reminderDB.markReminderAsCompleted("1");
console.log("All Reminders:", reminderDB.getAllReminders());
console.log("Completed Reminders:", reminderDB.getAllRemindersMarkedAsCompleted());
console.log("Reminders due today:", reminderDB.getAllRemindersDueByToday());
reminderDB.updateReminder("2", "Doctor's Checkup", "Annual health checkup", new Date("2025-03-12"));
reminderDB.removeReminder("1");
console.log("Final Reminders:", reminderDB.getAllReminders());
