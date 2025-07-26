import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'AWS Cost Analytics Pipeline',
        projectDesc: 'Built a serverless cost analytics pipeline using AWS Glue, Athena, and S3 to query Cost and Usage Reports in near real-time. Enabled granular billing insights and integrated with Grafana. Optimized ingestion via SQS-triggered Glue crawlers.',
        code: 'https://github.com/himanshuchoudhary448/aws-lambda-monitoring-alerting',
        image: one
    },
    {
        id: 2,
        projectName: 'AWS VPC Infrastructure with Terraform',
        projectDesc: 'Provisioned and managed scalable AWS VPC infrastructure using Terraform modules. Automated the creation of NAT Gateways, public/private subnets, route tables, and VPC flow logs with support for high availability and IPAM-based CIDR management.',
        code: 'https://github.com/himanshuchoudhary448/terraform-aws-vpc',
        image: two
    },
    {
        id: 3,
        projectName: 'CI/CD Pipeline with Jenkins, Docker, and Helm',
        projectDesc: 'Implemented a CI/CD pipeline for Kubernetes-based applications using Jenkins, Docker, and Helm. Integrated Artifactory as the container registry and Helm repository. Built and deployed a static web app to Kubernetes via automated Jenkins pipelines.',
        code: 'https://github.com/himanshuchoudhary448/jenkins-pipeline-kubernetes',
        image: three
    },
    {
        id: 4,
        projectName: 'Credit Risk Modeling',
        projectDesc: 'Utilized Big Data technologies like Hadoop MapReduce, Pig, and Hive to calculate and predict average loan risk across a dataset and risk based on category, location, and loan type.',
        code: 'https://github.com/himanshuchoudhary448/Credit-Risk-Modeling',
        image: four
    },
    {
        id: 5,
        projectName: 'Databricks SQL Connector for Python',
        projectDesc: 'Contributed to a Python-based SQL connector for Databricks using Apache Arrow and Thrift. Enabled fast and efficient query execution on Databricks SQL Warehouses, with support for OAuth authentication and integration with SQLAlchemy for broader ORM compatibility.',
        code: 'https://github.com/himanshuchoudhary448/databricks-sql-python',
        image: five
    },
    {
        id: 6,
        projectName: 'HealthTrack Assistant',
        projectDesc: 'Developed an Android app using Android Studio, Java, and XML to aid forgetful and busy individuals in remembering their daily medications. The app targets users seeking assistance in managing their medication schedules.',
        code: 'https://github.com/himanshuchoudhary448/HealthTrack-Assistant',
        image: six
    },
    {
        id: 7,
        projectName: 'Lambda Monitoring and Alerting Framework',
        projectDesc: 'Built an AWS Lambda monitoring and alerting solution using Amazon CloudWatch and SNS. Automated notifications for runtime anomalies and failures, ensuring operational transparency and fast incident response in serverless applications.',
        code: 'https://github.com/himanshuchoudhary448/aws-lambda-monitoring-alerting',
        image: seven
    },
    {
        id: 8,
        projectName: 'Spring Boot Microservices with Netflix OSS',
        projectDesc: 'Developed a microservices ecosystem with Spring Boot and Netflix OSS stack (Zuul, Eureka, Hystrix). Integrated services including API Gateway, Auth Server, and Amazon S3 file service. Leveraged OAuth2 for secure authentication and MongoDB for data persistence.',
        code: 'https://github.com/himanshuchoudhary448/spring-boot-microservices',
        image: eight
    },
     {
        id: 9,
        projectName: 'Spring Boot Redis Cache API',
        projectDesc: 'Engineered a Redis-powered Spring Boot caching service to accelerate API responses for customer data. Integrated Spring Cache annotations with Redis using Docker and Docker Compose, and exposed endpoints via Swagger for easy testing.',
        code: 'https://github.com/himanshuchoudhary448/spring-boot-redis-cache',
        image: eight
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/