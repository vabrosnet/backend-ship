import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Profile } from './profile.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateProfileDto } from './dto/create-profile.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        @InjectRepository(Profile) private readonly profileRepository: Repository<Profile>,
    ) {}

    async createUser(user: CreateUserDto) {
        const userFound = await this.userRepository.findOne({
            where: {
                username: user.username
            }
        });

        if (userFound) {
            return new HttpException('User already exists', HttpStatus.CONFLICT);
        }else {
            const newUser = this.userRepository.create(user);
            return this.userRepository.save(newUser);
        }
    }

    async getUsers() {
        return await this.userRepository.find();
    }

    async getUser(id: number) {
        const userFound = await this.userRepository.findOneBy({ id });

        if (!userFound) {
            return new HttpException('User not found', HttpStatus.NOT_FOUND);
        }else {
            return userFound;
        }
    }

    async deleteUser(id: number) {
        const userFound = await this.userRepository.findOneBy({ id });

        if (!userFound) {
            return new HttpException('User not found', HttpStatus.NOT_FOUND);
        }else {
            return this.userRepository.softDelete({ id });;
        }
    }

    async updateUser(id: number, user: UpdateUserDto) {
        const userFound = await this.userRepository.findOneBy({ id });

        if (!userFound) {
            return new HttpException('User not found', HttpStatus.NOT_FOUND);
        } else {
            return this.userRepository.update({ id }, user);
        }
    }

    async createProfile(id: number, profile: CreateProfileDto) {
        const userFound = await this.userRepository.findOne({where: {
            id
        }});

        if (!userFound) {
            return new HttpException('User not found', HttpStatus.NOT_FOUND);
        } else {
            const newProfile = this.profileRepository.create(profile);
            const savedProfile = await this.profileRepository.save(newProfile);

            userFound.profile = savedProfile;
            return this.userRepository.save(userFound)
        }
    }
}
