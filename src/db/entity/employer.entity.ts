import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import UserEntity from './user.entity';
import GenreEntity from './genre.entity';
import ProjectEntity from './project.entity';
import ReviewEntity from './review.entity';

@Entity()
export default class EmployerEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 64 })
    name: string;

    @OneToMany(type => ProjectEntity, project => project.employer)
    projects: ProjectEntity[];

    @OneToMany(type => ReviewEntity, project => project.author)
    reviewsWritten: ReviewEntity[];
}