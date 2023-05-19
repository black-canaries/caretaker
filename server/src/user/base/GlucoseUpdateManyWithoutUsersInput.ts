/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { GlucoseWhereUniqueInput } from "../../glucose/base/GlucoseWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class GlucoseUpdateManyWithoutUsersInput {
  @Field(() => [GlucoseWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [GlucoseWhereUniqueInput],
  })
  connect?: Array<GlucoseWhereUniqueInput>;

  @Field(() => [GlucoseWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [GlucoseWhereUniqueInput],
  })
  disconnect?: Array<GlucoseWhereUniqueInput>;

  @Field(() => [GlucoseWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [GlucoseWhereUniqueInput],
  })
  set?: Array<GlucoseWhereUniqueInput>;
}

export { GlucoseUpdateManyWithoutUsersInput as GlucoseUpdateManyWithoutUsersInput };