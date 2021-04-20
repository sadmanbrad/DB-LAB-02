import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import UserEntity from './user.entity';
import GenreEntity from './genre.entity';
import EmployerEntity from './employer.entity';
import OfferEntity from './offer.entity';

@Entity()
export default class ProjectEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 64 })
    title: string;

    @Column({ length: 500 })
    description: string;

    @ManyToOne(type => EmployerEntity, employer => employer.projects)
    employer: EmployerEntity;

    @OneToMany(type => OfferEntity, offer => offer.project)
    offers: OfferEntity[];
}