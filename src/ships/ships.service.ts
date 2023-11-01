import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ship } from './ship.entity';
// import { Flag } from './flag.entity';
import { Repository } from 'typeorm';
import { CreateShipDto } from './dto/create-ship.dto';
import { UpdateShipDto } from './dto/update-ship.dto';
// import { CreateFlagDto } from './dto/create-flag.dto';

@Injectable()
export class ShipsService {
    constructor(
        @InjectRepository(Ship) private readonly shipRepository: Repository<Ship>,
        // @InjectRepository(Flag) private readonly flagRepository: Repository<Flag>,
    ) {}

    async createShip(ship: CreateShipDto) {
        const shipFound = await this.shipRepository.findOne({
            where: {
                registration: ship.registration
            }
        });

        if (shipFound) {
            return new HttpException('Ship already exists', HttpStatus.CONFLICT);
        }else {
            const newShip = this.shipRepository.create(ship);
            return this.shipRepository.save(newShip);
        }
    }

    
    async getShips() {
        return await this.shipRepository.find();
    }

    async getShip(id: number) {
        const shipFound = await this.shipRepository.findOne({
            where: {
                id
            }
        })

        if (!shipFound) {
            return new HttpException('Ship not found', HttpStatus.NOT_FOUND);
        }else {
            return shipFound;
        }
    }

    async deleteShip(id: number) {
        const shipFound = await this.shipRepository.findOneBy({ id });

        if (!shipFound) {
            return new HttpException('Ship not found', HttpStatus.NOT_FOUND);
        }else {
            return this.shipRepository.softDelete({ id });;
        }
    }

    async updateShip(id: number, ship: UpdateShipDto) {
        const shipFound = await this.shipRepository.findOneBy({ id });

        if (!shipFound) {
            return new HttpException('Ship not found', HttpStatus.NOT_FOUND);
        } else {
            return this.shipRepository.update({ id }, ship);
        }
    }

    // async createProfile(id: number, profile: CreateProfileDto) {
    //     const userFound = await this.userRepository.findOne({where: {
    //         id
    //     }});

    //     if (!userFound) {
    //         return new HttpException('User not found', HttpStatus.NOT_FOUND);
    //     } else {
    //         const newProfile = this.profileRepository.create(profile);
    //         const savedProfile = await this.profileRepository.save(newProfile);

    //         userFound.profile = savedProfile;
    //         return this.userRepository.save(userFound)
    //     }
    // }
}
