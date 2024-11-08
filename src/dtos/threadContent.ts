import { ApiProperty } from "@nestjs/swagger";

export class ThreadContent {
    @ApiProperty({ description: "Thread text", nullable: true })
    text: string;

    @ApiProperty({ description: "Thread images in base64", nullable: true })
    images: Array<string>;
}