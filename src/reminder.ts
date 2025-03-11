
class Reminder {
    id: string;
    title: string;
    description: string;
    dueDate: Date;
    completed: boolean;

    constructor(id: string, title: string, description: string, dueDate: Date) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.completed = false;
    }
}

class ReminderDatabase {
    private reminders: Map<string, Reminder>;

    constructor() {
        this.reminders = new Map();
    }

    createReminder(id: string, title: string, description: string, dueDate: Date): void {
        if (this.reminders.has(id)) {
            throw new Error("Reminder with this ID already exists.");
        }
        this.reminders.set(id, new Reminder(id, title, description, dueDate));
    }

    exists(id: string): boolean {
        return this.reminders.has(id);
    }

    markReminderAsCompleted(id: string): void {
        const reminder = this.reminders.get(id);
        if (reminder) reminder.completed = true;
    }

    unmarkReminderAsCompleted(id: string): void {
        const reminder = this.reminders.get(id);
        if (reminder) reminder.completed = false;
    }

    getAllReminders(): Reminder[] {
        return Array.from(this.reminders.values());
    }

    getReminder(id: string): Reminder | null {
        return this.reminders.get(id) || null;
    }

    getAllRemindersMarkedAsCompleted(): Reminder[] {
        return this.getAllReminders().filter(reminder => reminder.completed);
    }

    getAllRemindersNotMarkedAsCompleted(): Reminder[] {
        return this.getAllReminders().filter(reminder => !reminder.completed);
    }

    getAllRemindersDueByToday(): Reminder[] {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return this.getAllReminders().filter(reminder => reminder.dueDate <= today);
    }

    updateReminder(id: string, title?: string, description?: string, dueDate?: Date): void {
        const reminder = this.reminders.get(id);
        if (!reminder) throw new Error("Reminder not found.");
        if (title) reminder.title = title;
        if (description) reminder.description = description;
        if (dueDate) reminder.dueDate = dueDate;
    }

    removeReminder(id: string): void {
        this.reminders.delete(id);
    }
}

export { Reminder, ReminderDatabase };