import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import EmployerEntity from './employer.entity';
import FreelancerEntity from './freelancer.entity';
import SkillEntity from './skill.entity';

@Entity()
export default class OfferEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 64 })
    title: string;

    @Column({ length: 500 })
    details: string;

    @ManyToOne(type => FreelancerEntity, freelancer => freelancer.offers)
    freelancer: EmployerEntity;

    @ManyToMany(type => SkillEntity)
    @JoinTable()
    relatedSkills: SkillEntity[];
}