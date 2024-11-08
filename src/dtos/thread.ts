import { ApiProperty } from "@nestjs/swagger";
import { ThreadContent } from "./threadContent";

export class Thread {
    @ApiProperty({ description: "Thread identifier", nullable: false })
    id_: number;

    @ApiProperty({ description: "Thread section", nullable: false })
    section: number;

    @ApiProperty({ description: "Thread title", nullable: false })
    title: string;

    @ApiProperty({ description: "Thread tags", nullable: false })
    tags: Array<string>;

    @ApiProperty({ description: "Thread content", nullable: false })
    content: ThreadContent;

    constructor(id_: number, section: number, title: string, tags: Array<string>, content: { text: string, images: Array<string> }) {
        this.id_ = id_;
        this.section = section;
        this.title = title;
        this.tags = tags;
        this.content = content;
    }
}
