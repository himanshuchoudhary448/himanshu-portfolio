import html from '../assets/svg/skills/html.svg'
import css3 from '../assets/svg/skills/css3.svg'
import typescript from '../assets/svg/skills/typescript.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import java from '../assets/svg/skills/java.svg'
import python from '../assets/svg/skills/python.svg'
import spark from '../assets/svg/skills/spark.svg'
import scala from '../assets/svg/skills/scala.svg'
import csharp from '../assets/svg/skills/csharp.svg'
import spring from '../assets/svg/skills/spring.svg'
import bash from '../assets/svg/skills/bash.svg'
import groovy from '../assets/svg/skills/groovy.svg'
import redis from '../assets/svg/skills/redis.svg'
import mongodb from '../assets/svg/skills/mongoDB.svg'
import dynamodb from '../assets/svg/skills/dynamodb.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import oracle from '../assets/svg/skills/oracle.svg'
import hadoop from '../assets/svg/skills/hadoop.svg'
import sqlite from '../assets/svg/skills/sqlite.svg'
import databricks from '../assets/svg/skills/databricks.svg'
import jenkins from '../assets/svg/skills/jenkins.svg'
import terraform from '../assets/svg/skills/terraform.svg'
import azuredevops from '../assets/svg/skills/azuredevops.svg'
import github from '../assets/svg/skills/github.svg'
import bitbucket from '../assets/svg/skills/bitbucket.svg'
import jfrog from '../assets/svg/skills/jfrog.svg'
import docker from '../assets/svg/skills/docker.svg'
import kubernetes from '../assets/svg/skills/kubernetes.svg'
import ansible from '../assets/svg/skills/ansible.svg'
import aws from '../assets/svg/skills/aws.svg'
import azure from '../assets/svg/skills/azure.svg'

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html': return html;
        case 'css3': return css3;
        case 'typescript': return typescript;
        case 'javascript': return javascript;
        case 'java': return java;
        case 'python': return python;
        case 'spark': return spark;
        case 'scala': return scala;
        case 'csharp': return csharp;
        case 'spring': return spring;
        case 'bash': return bash;
        case 'groovy': return groovy;
        case 'redis': return redis;
        case 'mongodb': return mongodb;
        case 'dynamo db': return dynamodb;
        case 'mysql': return mysql;
        case 'oracle': return oracle;
        case 'hadoop': return hadoop;
        case 'sqlite': return sqlite;
        case 'databricks': return databricks;
        case 'jenkins': return jenkins;
        case 'terraform': return terraform;
        case 'azure devops': return azuredevops;
        case 'github actions': return github;
        case 'bitbucket': return bitbucket;
        case 'jfrog': return jfrog;
        case 'docker': return docker;
        case 'kubernetes': return kubernetes;
        case 'ansible': return ansible;
        case 'aws': return aws;
        case 'azure': return azure;
        default:
            break;
    }
};

   