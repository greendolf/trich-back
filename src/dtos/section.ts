import { ApiProperty } from "@nestjs/swagger";

export class Section {
    @ApiProperty({ description: "Section identifier", nullable: false })
    id: number;

    @ApiProperty({ description: "Section name", nullable: false })
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}
