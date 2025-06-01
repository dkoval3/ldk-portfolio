# LDK Interiors - Static Portfolio Site
## Project Overview
This project is a responsive portfolio website for **LDK Interiors**, designed to showcase the interior design services offered by Lois Koval. The site is built with **Next.js**, leveraging modern frontend technologies like **React** and **Tailwind CSS**. It is deployed as a **static site** using an Amazon CloudFront distribution with an S3 bucket origin under the custom domain `ldkinteriors.net`.
## Features

1. **Clean and Minimal Interface**:
    - Showcases design services, contact details, and the company’s identity with simple layouts and elegant typography.

2. **Static Deployment**:
    - Currently deployed as a static site through Next.js's `output: 'export'` configuration for simplicity.

3. **Cloud Distribution**:
    - Hosted via **CloudFront** to support HTTPS, and ensure fast delivery, as well as robust caching, across global regions.

4. **Styling**:
    - Styled using **Tailwind CSS** for rapid development and consistent design.
    - Uses Google Font `"Cormorant Garamond"`.

## Developer Information
### Tech Stack
- **Language**: TypeScript (React)
- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Hosting**: Static web hosting (AWS - [S3](https://aws.amazon.com/s3/), [CloudFront](https://aws.amazon.com/cloudfront/))
- **Domain/Registration**: [ldkinteriors.net](https://ldkinteriors.net/), [Route53](https://aws.amazon.com/route53/)

## Installation and Development
Follow the steps below to set up the project locally for further development or modifications.
### Prerequisites
- Node.js (>=20.0.0)
- npm (>=10.x)

### Clone Repository
``` bash
git clone https://github.com/dkoval3/ldk-portfolio.git
cd ldk-portfolio
```
### Install Dependencies
``` bash
npm install
```
### Development Server
Start the local development server:
``` bash
npm run dev
```
- The site will be available at: `http://localhost:3000`

### Static Export
To generate the static version of the site:
``` bash
npm run build
```
The static assets will be generated in the `out/` directory and can be deployed to any static hosting platform.
## Deployment
This site is built as a fully static project and is currently deployed manually onto S3. In the future, there will be a CI/CD pipeline with automated deployment to S3 using GitHub Actions.
### Hosting Steps (General Overview)
1. **Build Static Files**: After running `npm run build`, the output folder (`out/`) contains all static files (HTML, CSS, JS, images).
2. **Upload to Static Hosting**:
    - Upload all files in the `out/` directory to the subdomain S3 bucket `www.ldkinteriors.net`
      - Request project owner for access to the S3 bucket, if needed.
3. **CloudFront Distribution**:
   - Invalidate the CloudFront cache for both the root domain and subdomain distributions to force CloudFront to fetch assets from the origin.

## Site URL
**Production URL**: [ldkinteriors.net](https://ldkinteriors.net)

## Future Enhancements
Here are some ideas for extending the portfolio site:
1. **Contact Form**: Include a dynamic contact form integrated with backend services like AWS Lambda and SNS.
2. **Image Gallery**: Showcase past projects via a clickable, dynamic gallery.
3. **Utilize SSR**: Once the project becomes more complex, update the deployment from a static website to a Node.js server to make use of Next's SSR features.
