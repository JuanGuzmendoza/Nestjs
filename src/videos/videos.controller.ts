import { Controller, Get, Post, Body, Patch, Param, Delete,Query } from '@nestjs/common';
import { VideosService } from './videos.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';

@Controller('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}


  @Post()
  crear(@Body() crear: CreateVideoDto) {
    console.log(crear);
    return this.videosService.create(crear)
  }


    @Get()
    findAll(@Query() query: string) {
      console.log(query);
      return this.videosService.findAll();
    }
  

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.videosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVideoDto: UpdateVideoDto) {
    return this.videosService.update(+id, updateVideoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videosService.remove(+id);
  }
}
