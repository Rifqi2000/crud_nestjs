import { Body, Controller, Delete, Get, Param, Post, Put, Render } from '@nestjs/common';
import {FilekitaService} from './filekita.service'
import {FilekitaDTO} from'./filekita.dto'

@Controller('filekita')
export class FilekitaController {

    constructor(private FilekitaService:FilekitaService ){}

    @Get('jsondata')
    async lihatOutput(){
        return {data : await this.FilekitaService.showAll()};
    }

    @Get()
    @Render('filekita/index')
    root() {
        return { message: 'Whats Up', title : 'Index FileKita' };
    }

    @Post()
    membuatRecord(@Body() data : FilekitaDTO){
        return this.FilekitaService.create(data);  
    }

    @Get(':id')
    lihatDetail(@Param('id') id : string){
        // return 'ini controller detail ' + id;
        return this.FilekitaService.showById(id);
    }
    
    @Put(':id')
    updateDetail(@Param('id') id : string, @Body() data : Partial <FilekitaDTO> ){
        return this.FilekitaService.updateData(id,data);
    }

    @Delete(':id')
    hapusDetail(@Param('id') id : string){
        return this.FilekitaService.deleteById(id);
    }
}
