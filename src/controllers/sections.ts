import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { SectionsService } from '../services/sections';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Section } from 'src/dtos/section';

@ApiTags("Sections")
@Controller("sections")
export class SectionsController {
  constructor(private readonly SectionService: SectionsService) { }

  @Get() // получить все разделы
  @ApiOperation({ summary: "Returns all sections" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success", type: [Section] })
  async getSections(): Promise<Section[]> {
    return (await this.SectionService.getSections());
  }

  @Get(":id") // получить определённый раздел
  @ApiOperation({ summary: "Returns a section with specified id" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success", type: [Section] })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })

  async getSection(@Param("id") id: string): Promise<Section> {
    if (!isNaN(Number(id))) {
      const section = await this.SectionService.getSection(Number(id))

      if (!section) throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST)
      return section;
    }
    else throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST)
  }
}

