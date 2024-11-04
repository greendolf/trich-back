import { ApiProperty } from "@nestjs/swagger";

export class ThreadContent {
    @ApiProperty({ description: "Thread text", nullable: true })
    text: string;

    @ApiProperty({ description: "Thread images", nullable: true })
    images: Array<string>;
}