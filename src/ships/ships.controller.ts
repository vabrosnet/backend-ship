import { Controller, Post, Body, Get, Param, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { CreateShipDto } from './dto/create-ship.dto';
import { UpdateShipDto } from './dto/update-ship.dto';
import { ShipsService } from './ships.service';
import { Ship } from './ship.entity';
// import { CreateFlagDto } from './dto/create-flag.dto';

@Controller('ships')
export class ShipsController {
    constructor(private shipsService: ShipsService) {}

    @Get()
    getShips(): Promise<Ship[]> {
        return this.shipsService.getShips();
    }

    @Get(':id')
    getShip(@Param('id', ParseIntPipe) id: number) {
        return this.shipsService.getShip(id);
    }

    @Post()
    createShip(@Body() newShip: CreateShipDto) {
        return this.shipsService.createShip(newShip); 
    }

    @Delete(':id')
    deleteShip(@Param('id', ParseIntPipe) id: number) {
        return this.shipsService.deleteShip(id);
    }

    @Patch(':id')
    updateShip(@Param('id', ParseIntPipe) id: number, @Body() ship: UpdateShipDto) {
        return this.shipsService.updateShip(id, ship);
    }

    // @Post(':id/profile')
    // createProfile(@Param('id', ParseIntPipe) id: number, @Body() profile: CreateProfileDto) {   
    //     return this.usersService.createProfile(id, profile);
    // }
}

