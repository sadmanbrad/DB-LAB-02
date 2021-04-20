import { Injectable } from '@nestjs/common';
import CreateBookDto from 'src/Books/dto/create-book.dto';
import BookEntity from 'src/db/entity/book.entity';
import CategoryEntity from 'src/db/entity/category.entity';
import EmployerEntity from 'src/db/entity/employer.entity';
import FreelancerEntity from 'src/db/entity/freelancer.entity';
import GenreEntity from 'src/db/entity/genre.entity';
import OfferEntity from 'src/db/entity/offer.entity';
import ProjectEntity from 'src/db/entity/project.entity';
import ReviewEntity from 'src/db/entity/review.entity';
import SkillEntity from 'src/db/entity/skill.entity';
import UserEntity from 'src/db/entity/user.entity';
import CreateCategoryDto from './dto/create-category.dto';
import CreateEmployerDto from './dto/create-employer.dto';
import CreateFreelancerDto from './dto/create-freelancer.dto';
import CreateOfferDto from './dto/create-offer.dto';
import CreateProjectDto from './dto/create-project.dto';
import CreateReviewDto from './dto/create-review.dto';

@Injectable()
export class JobseekersService {

    // Employers

    async createEmployer(employerDetails: CreateEmployerDto): Promise<EmployerEntity> {
        const { name } = employerDetails;
        const employer = new EmployerEntity();
        employer.name = name;
        await employer.save();
        return employer;
    }

    // Categories

    async getAllCategories(): Promise<CategoryEntity[]> {
        return CategoryEntity.find();
    }

    async createCategory(categoryDetails: CreateCategoryDto): Promise<CategoryEntity> {
        const { name } = categoryDetails;
        const category = new CategoryEntity();
        category.name = name;
        await category.save();
        return category;
    }

    // Reviews

    async getAllUserReviews(freelancerID: number): Promise<ReviewEntity[]> {
        const entity = await FreelancerEntity.findOne(freelancerID);
        return ReviewEntity.find({ where: { freelancer: entity } });
    }

    async createReview(freelancerID: number, reviewDetails: CreateReviewDto): Promise<ReviewEntity> {
        const { rating, authorID, details } = reviewDetails;
        const review = new ReviewEntity();
        review.rating = rating;
        review.details = details;
        review.creationDate = new Date();
        review.author = await EmployerEntity.findOne(authorID);
        review.freelancer = await FreelancerEntity.findOne(freelancerID);
        await review.save();
        return review;
    }

    async deleteReview(reviewID: number) {
        ReviewEntity.delete(reviewID);
    }

    async updateReview(reviewID: number, reviewDetails: CreateReviewDto): Promise<ReviewEntity> {
        const { rating, authorID, details } = reviewDetails;
        const review = await ReviewEntity.findOne({ where: { id: reviewID } });
        review.rating = rating;
        review.details = details;
        review.creationDate = new Date();
        await review.save();
        return review;
    }

    // Offers

    async getAllProjectOffers(projectID: number): Promise<OfferEntity[]> {
        const entity = await ProjectEntity.findOne(projectID);
        return OfferEntity.find({ where: { project: entity } });
    }

    async createOffer(projectID: number, offerDetails: CreateOfferDto): Promise<OfferEntity> {
        const { message, freelancerID, creationDate } = offerDetails;
        const offer = new OfferEntity();
        offer.message = message;
        offer.creationDate = creationDate;
        offer.freelancer = await FreelancerEntity.findOne(freelancerID);
        offer.project = await ProjectEntity.findOne(projectID);
        await offer.save();
        return offer;
    }

    async deleteOffer(offerID: number) {
        OfferEntity.delete(offerID);
    }

    async updateOffer(offerID: number, offerDetails: CreateOfferDto): Promise<OfferEntity> {
        const { message } = offerDetails;
        const offer = await OfferEntity.findOne({ where: { id: offerID } });
        offer.message = message;
        await offer.save();
        return offer;
    }

    // Freelancers

    async getAllFreelancers(): Promise<FreelancerEntity[]> {
        return FreelancerEntity.find();
    }

    async createFreelancer(freelancerDetails: CreateFreelancerDto): Promise<FreelancerEntity> {
        const { name, bio, skills } = freelancerDetails;
        const freelancer = new FreelancerEntity();
        freelancer.name = name;
        freelancer.bio = bio;
        freelancer.skills = [];
        for (let i = 0; i < skills.length; i++) {
            const skill = await this.getOrCreateSkill(skills[i]);
            freelancer.skills.push(skill);
        }
        await freelancer.save();
        return freelancer;
    }

    async updateFreelancer(freelancerID: number, freelancerDetails: CreateFreelancerDto): Promise<FreelancerEntity> {
        const { bio, skills } = freelancerDetails;
        const freelancer = await FreelancerEntity.findOne({ where: { id: freelancerID } });
        freelancer.bio = bio;
        freelancer.skills = [];
        for (let i = 0; i < skills.length; i++) {
            const skill = await this.getOrCreateSkill(skills[i]);
            freelancer.skills.push(skill);
        }
        await freelancer.save();
        return freelancer;
    }

    async deleteProfile(freelancerID: number) {
        FreelancerEntity.delete(freelancerID);
    }


    // Projects

    async getAllProjects(): Promise<ProjectEntity[]> {
        return ProjectEntity.find();
    }

    async createProject(projectDetails: CreateProjectDto): Promise<ProjectEntity> {
        const { title, employerID, details, categoryID, relatedSkills } = projectDetails;
        const project = new ProjectEntity();
        project.title = title;
        project.description = details;
        project.employer = await EmployerEntity.findOne(employerID);
        project.category = await CategoryEntity.findOne(categoryID);
        project.relatedSkills = [];
        for (let i = 0; i < relatedSkills.length; i++) {
            const skill = await this.getOrCreateSkill(relatedSkills[i]);
            project.relatedSkills.push(skill);
        }
        project.offers = [];
        await project.save();
        return project;
    }

    async updateProject(projectID: number, projectDetails: CreateProjectDto): Promise<ProjectEntity> {
        const { details, budget, relatedSkills } = projectDetails;
        const project = await ProjectEntity.findOne({ where: { id: projectID } });
        project.description = details;
        project.budget = budget;
        project.relatedSkills = [];
        for (let i = 0; i < relatedSkills.length; i++) {
            const skill = await this.getOrCreateSkill(relatedSkills[i]);
            project.relatedSkills.push(skill);
        }
        await project.save();
        return project;
    }

    async deleteProject(projectID: number) {
        ProjectEntity.delete(projectID);
    }

    // Skill

    async getAllSkills(): Promise<SkillEntity[]> {
        return SkillEntity.find();
    }

    async getOrCreateSkill(skillName: string): Promise<SkillEntity> {
        let skill = await SkillEntity.findOne({ where: { title: skillName } });

        if (!skill) {
            skill = new SkillEntity();
            skill.title = skillName;
            await skill.save();
        }

        return skill;
    }

}
