import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import EmployerEntity from './employer.entity';
import ProjectEntity from './project.entity';
import FreelancerEntity from './freelancer.entity';

@Entity()
export default class OfferEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    creationDate: Date;

    @Column({ length: 500 })
    message: string;

    @ManyToOne(type => FreelancerEntity, freelancer => freelancer.offers)
    freelancer: EmployerEntity;

    @ManyToOne(type => ProjectEntity, project => project.offers)
    project: ProjectEntity;
}