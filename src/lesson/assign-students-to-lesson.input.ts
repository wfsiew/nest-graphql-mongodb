import { Field, ID } from "@nestjs/graphql";
import { IsUUID } from "class-validator";

export class AssignStudentsToLessonInput {
  @IsUUID()
  @Field(type => [ID])
  studentIds: string[];

  @IsUUID('4', { each: true })
  @Field(type => ID)
  lessonId: string;
}