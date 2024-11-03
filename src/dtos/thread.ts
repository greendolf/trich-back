import { ApiProperty } from "@nestjs/swagger";

export class Thread {
    @ApiProperty({ description: "Thread identifier", nullable: false })
    id: number;

    @ApiProperty({ description: "Thread section", nullable: false })
    section: string;

    @ApiProperty({ description: "Thread tags", nullable: false })
    tags: Array<string>;

    @ApiProperty({ description: "Thread content", nullable: false })
    content: { text: string, images: string };

    constructor(id: number, section: string, tags: Array<string>, content: { text: string, images: string }) {
        this.id = id;
        this.section = section;
        this.tags = tags;
        this.content = content;
    }
}
