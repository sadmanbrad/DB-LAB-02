import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import CategoryEntity from './category.entity';
import EmployerEntity from './employer.entity';
import OfferEntity from './offer.entity';
import SkillEntity from './skill.entity';

@Entity()
export default class ProjectEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 64 })
    title: string;

    @Column({ length: 500 })
    description: string;

    @Column()
    budget: number;

    @ManyToOne(type => EmployerEntity, employer => employer.projects)
    employer: EmployerEntity;

    @ManyToOne(type => CategoryEntity)
    category: CategoryEntity;

    @OneToMany(type => OfferEntity, offer => offer.project)
    offers: OfferEntity[];

    @ManyToMany(type => SkillEntity)
    @JoinTable()
    relatedSkills: SkillEntity[];
}