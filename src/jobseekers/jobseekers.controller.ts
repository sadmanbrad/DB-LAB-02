import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import CreateCategoryDto from './dto/create-category.dto';
import CreateEmployerDto from './dto/create-employer.dto';
import CreateFreelancerDto from './dto/create-freelancer.dto';
import CreateOfferDto from './dto/create-offer.dto';
import CreateProjectDto from './dto/create-project.dto';
import CreateReviewDto from './dto/create-review.dto';
import { JobseekersService } from './jobseekers.service';

@Controller('jobseekers')
export class JobseekersController {
    constructor(private readonly jobseekersService: JobseekersService) { }

    // Freelancers

    @ApiOperation({ description: 'Creates a new freelancer' })
    @ApiCreatedResponse({ description: 'Profile created successfully' })
    @Post('freelancers')
    createFreelancer(@Body() freelancer: CreateFreelancerDto) {
        return this.jobseekersService.createFreelancer(freelancer);
    }

    @ApiOperation({ description: 'Retrieves list of all freelancers' })
    @ApiOkResponse({ description: 'Freelancers retrieved successfully' })
    @Get('freelancers/')
    getAllFreelancers() {
        return this.jobseekersService.getAllFreelancers();
    }

    @ApiOperation({ description: 'Updates the details of a freelancer' })
    @ApiOkResponse({ description: 'Freelancer updated successfully' })
    @Put('freelancers/:freelancerID')
    updateFreelancer(@Param('freelancerID') freelancerID: number, @Body() freelancer: CreateFreelancerDto) {
        return this.jobseekersService.updateFreelancer(freelancerID, freelancer);
    }

    @ApiOperation({ description: 'Deletes a freelancer' })
    @ApiOkResponse({ description: 'Freelancer deleted successfully' })
    @Delete('freelancers/:freelancerID')
    deleteFreelancer(@Param('freelancerID') freelancerID: number) {
        this.jobseekersService.deleteFreelancer(freelancerID);
    }

    // Projects

    @ApiOperation({ description: 'Creates a new project' })
    @ApiCreatedResponse({ description: 'Project created successfully' })
    @Post('projects')
    createProject(@Body() project: CreateProjectDto) {
        return this.jobseekersService.createProject(project);
    }

    @ApiOperation({ description: 'Retrieves list of all projects' })
    @ApiOkResponse({ description: 'Projects retrieved successfully' })
    @Get('projects/')
    getAllProjects() {
        return this.jobseekersService.getAllProjects();
    }

    @ApiOperation({ description: 'Updates the details of a project' })
    @ApiOkResponse({ description: 'Project updated successfully' })
    @Put('projects/:projectID')
    updateProject(@Param('projectID') projectID: number, @Body() project: CreateProjectDto) {
        return this.jobseekersService.updateProject(projectID, project);
    }

    @ApiOperation({ description: 'Deletes a project' })
    @ApiOkResponse({ description: 'Project deleted successfully' })
    @Delete('projects/:projectID')
    deleteProject(@Param('projectID') projectID: number) {
        this.jobseekersService.deleteProject(projectID);
    }

    // Offers

    @ApiOperation({ description: 'Creates a new offer' })
    @ApiCreatedResponse({ description: 'Offer created successfully' })
    @Post('projects/:projectID/offers')
    createOffer(@Param('projectID') projectID: number, @Body() offer: CreateOfferDto) {
        return this.jobseekersService.createOffer(projectID, offer);
    }

    @ApiOperation({ description: 'Retrieves list of all offers' })
    @ApiOkResponse({ description: 'Offers retrieved successfully' })
    @Get('projects/:projectID/offers')
    getAllProjectOffers(@Param('projectID') projectID: number) {
        return this.jobseekersService.getAllProjectOffers(projectID);
    }

    @ApiOperation({ description: 'Updates the details of a offer' })
    @ApiOkResponse({ description: 'Offer updated successfully' })
    @Put('offers/:offerID')
    updateOffer(@Param('offerID') offerID: number, @Body() offer: CreateOfferDto) {
        return this.jobseekersService.updateOffer(offerID, offer);
    }

    @ApiOperation({ description: 'Deletes a offer' })
    @ApiOkResponse({ description: 'Offer deleted successfully' })
    @Delete('offers/:offerID')
    deleteOffer(@Param('offerID') offerID: number) {
        this.jobseekersService.deleteOffer(offerID);
    }

    // Reviews

    @ApiOperation({ description: 'Creates a new review' })
    @ApiCreatedResponse({ description: 'Review created successfully' })
    @Post('freelancers/:freelancerID/reviews')
    createReview(@Param('freelancerID') freelancerID: number, @Body() review: CreateReviewDto) {
        return this.jobseekersService.createReview(freelancerID, review);
    }

    @ApiOperation({ description: 'Retrieves list of all reviews' })
    @ApiOkResponse({ description: 'Reviews retrieved successfully' })
    @Get('freelancers/:freelancerID/reviews')
    getAllProjectReviews(@Param('freelancerID') freelancerID: number) {
        return this.jobseekersService.getAllUserReviews(freelancerID);
    }

    @ApiOperation({ description: 'Updates the details of a review' })
    @ApiOkResponse({ description: 'Review updated successfully' })
    @Put('reviews/:reviewID')
    updateReview(@Param('reviewID') reviewID: number, @Body() review: CreateReviewDto) {
        return this.jobseekersService.updateReview(reviewID, review);
    }

    @ApiOperation({ description: 'Deletes a review' })
    @ApiOkResponse({ description: 'Review deleted successfully' })
    @Delete('reviews/:reviewID')
    deleteReview(@Param('reviewID') reviewID: number) {
        this.jobseekersService.deleteReview(reviewID);
    }

    // Categories

    @ApiOperation({ description: 'Creates a new category' })
    @ApiCreatedResponse({ description: 'Category created successfully' })
    @Post('categories')
    createCategory(@Body() category: CreateCategoryDto) {
        return this.jobseekersService.createCategory(category);
    }

    @ApiOperation({ description: 'Retrieves list of all categories' })
    @ApiOkResponse({ description: 'Categories retrieved successfully' })
    @Get('categories')
    getAllCategories() {
        return this.jobseekersService.getAllCategories();
    }

    // Employers

    @ApiOperation({ description: 'Creates a new employer' })
    @ApiCreatedResponse({ description: 'Employer created successfully' })
    @Post('employers')
    createEmployer(@Body() employer: CreateEmployerDto) {
        return this.jobseekersService.createEmployer(employer);
    }

    // Skills

    @ApiOperation({ description: 'Retrieves list of all skills' })
    @ApiOkResponse({ description: 'Skills retrieved successfully' })
    @Get('skills')
    getAllSkills() {
        return this.jobseekersService.getAllSkills();
    }

}
