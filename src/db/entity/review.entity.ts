import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import UserEntity from './user.entity';
import GenreEntity from './genre.entity';
import EmployerEntity from './employer.entity';
import ProjectEntity from './project.entity';
import FreelancerEntity from './freelancer.entity';

@Entity()
export default class ReviewEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    creationDate: Date;

    @Column()
    rating: number;

    @Column({ length: 500 })
    details: string;

    @ManyToOne(type => FreelancerEntity, freelancer => freelancer.reviews)
    freelancer: EmployerEntity;

    @ManyToOne(type => EmployerEntity, author => author.reviewsWritten)
    author: EmployerEntity;
}