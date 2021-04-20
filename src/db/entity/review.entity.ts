import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import EmployerEntity from './employer.entity';
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
    freelancer: FreelancerEntity;

    @ManyToOne(type => EmployerEntity, author => author.reviewsWritten)
    author: EmployerEntity;
}