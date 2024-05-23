/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Reminder as PrismaReminder } from "@prisma/client";

export class ReminderServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ReminderCountArgs, "select">): Promise<number> {
    return this.prisma.reminder.count(args);
  }

  async reminders<T extends Prisma.ReminderFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReminderFindManyArgs>
  ): Promise<PrismaReminder[]> {
    return this.prisma.reminder.findMany<Prisma.ReminderFindManyArgs>(args);
  }
  async reminder<T extends Prisma.ReminderFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReminderFindUniqueArgs>
  ): Promise<PrismaReminder | null> {
    return this.prisma.reminder.findUnique(args);
  }
  async createReminder<T extends Prisma.ReminderCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReminderCreateArgs>
  ): Promise<PrismaReminder> {
    return this.prisma.reminder.create<T>(args);
  }
  async updateReminder<T extends Prisma.ReminderUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReminderUpdateArgs>
  ): Promise<PrismaReminder> {
    return this.prisma.reminder.update<T>(args);
  }
  async deleteReminder<T extends Prisma.ReminderDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReminderDeleteArgs>
  ): Promise<PrismaReminder> {
    return this.prisma.reminder.delete(args);
  }
}