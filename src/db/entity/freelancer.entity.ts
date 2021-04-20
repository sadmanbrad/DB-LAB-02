import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import UserEntity from './user.entity';
import GenreEntity from './genre.entity';
import ProjectEntity from './project.entity';
import OfferEntity from './offer.entity';
import ReviewEntity from './review.entity';

@Entity()
export default class FreelancerEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 64 })
    name: string;

    @OneToMany(type => OfferEntity, offer => offer.freelancer)
    offers: OfferEntity[];

    @OneToMany(type => ReviewEntity, review => review.freelancer)
    reviews: ReviewEntity[];
}