import { ApiProperty } from "@nestjs/swagger";
import { ThreadContent } from "./threadContent";

export class CreateThread {
    @ApiProperty({ description: "Thread title", nullable: false })
    title: string;

    @ApiProperty({ description: "Thread tags", nullable: false })
    tags: Array<string>;

    @ApiProperty({ description: "Thread content", nullable: false })
    content: ThreadContent;

    constructor(title: string, tags: Array<string>, content: { text: string, images: Array<string> }) {
        this.title = title;
        this.tags = tags;
        this.content = content;
    }
}
