import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Employee } from './Employees.schema';
import { LeaveType } from './LeaveTypes.schema';
@Schema()
export class LeaveEmployees extends Document {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Employee', required: true })
  employeeId: MongooseSchema.Types.ObjectId | Employee;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'LeaveType', required: true })
  leaveTypeId: MongooseSchema.Types.ObjectId | LeaveType;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;

  @Prop({ required: true })
  startPeriod: string;

  @Prop({ required: true })
  endPeriod: string;

  

  @Prop()
  subtype: string;

  @Prop({ enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' })
  status: string;

  @Prop()
  explanation: string;

  @Prop()
  attachment: string;
}

export const EmployeeLeaveSchema = SchemaFactory.createForClass(LeaveEmployees);
