import { Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
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

  // @Post() // получить все разделы
  // @ApiOperation({ summary: "Returns all sections" })
  // @ApiResponse({ status: HttpStatus.OK, description: "Success", type: [Section] })
  // async postSections(): Promise<Section> {
  //   return (await this.SectionService.postSection());
  // }

  @Get(":section_id") // получить определённый раздел
  @ApiOperation({ summary: "Returns a section with specified id" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success", type: [Section] })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })

  async getSection(@Param("section_id") section_id: number): Promise<Section> {
    if (!isNaN(Number(section_id))) {
      const section = await this.SectionService.getSection(Number(section_id))

      if (!section) throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST)
      return section;
    }
    else throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST)
  }
}

