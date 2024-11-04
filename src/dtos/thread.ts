import { ApiProperty } from "@nestjs/swagger";

export class Thread {
    @ApiProperty({ description: "Thread identifier", nullable: false })
    id_: number;

    @ApiProperty({ description: "Thread section", nullable: false })
    section: number;

    @ApiProperty({ description: "Thread tags", nullable: false })
    tags: Array<string>;

    @ApiProperty({ description: "Thread title", nullable: false })
    title: string;

    @ApiProperty({ description: "Thread content", nullable: false })
    content: { text: string, images: Array<string> };

    constructor(id_: number, section: number, tags: Array<string>, title: string, content: { text: string, images: Array<string> }) {
        this.id_ = id_;
        this.section = section;
        this.tags = tags;
        this.title = title;
        this.content = content;
    }
}
