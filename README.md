![Coverage](https://audirline.github.io/spring-music-sqldb/reports/jacoco/badges/jacoco.svg)
![Branches](https://audirline.github.io/spring-music-sqldb/reports/jacoco/badges/branches.svg)

![Gitleaks Secret Detection](https://img.shields.io/endpoint?url=https://audirline.github.io/spring-music-sqldb/badges/gitleaks-badge.json)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=audirline_spring-music-sqldb&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=audirline_spring-music-sqldb)

[![Rapport OWASP](https://img.shields.io/badge/OWASP-View-blue)](https://audirline.github.io/spring-music-sqldb/reports/owasp/dependency-check-report.html)

[![Build Status](https://github.com/audirline/spring-music-sqldb/actions/workflows/github-actions-demo.yml/badge.svg)](https://github.com/audirline/spring-music-sqldb/actions/workflows/github-actions-demo.yml)


Spring Music
============

This is a sample application for using database services on [Cloud Foundry](http://cloudfoundry.org) with the [Spring Framework](http://spring.io) and [Spring Boot](http://projects.spring.io/spring-boot/)....

This application has been built to store the same domain objects in one of a variety of different persistence technologies - relational, document, and key-value stores. This is not meant to represent a realistic use case for these technologies, since you would typically choose the one most applicable to the type of data you need to store, but it is useful for testing and experimenting with different types of services on Cloud Foundry.

The application use Spring Java configuration and [bean profiles](http://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-profiles.html) to configure the application and the connection objects needed to use the persistence stores. It also uses the [Spring Cloud Connectors](http://cloud.spring.io/spring-cloud-connectors/) library to inspect the environment when running on Cloud Foundry. See the [Cloud Foundry documentation](http://docs.cloudfoundry.org/buildpacks/java/spring-service-bindings.html) for details on configuring a Spring application for Cloud Foundry.

## Building

This project requires Java 8 to compile. It will not compile with Java 9 or later.

To build a runnable Spring Boot jar file, run the following command: 

~~~
$ ./gradlew clean assemble
~~~

## Running the application locally

One Spring bean profile should be activated to choose the database provider that the application should use. The profile is selected by setting the system property `spring.profiles.active` when starting the app.

The application can be started locally using the following command:

~~~
$ java -jar -Dspring.profiles.active=<profile> build/libs/spring-music.jar
~~~

where `<profile>` is one of the following values:

* `mysql`
* `postgres`
* `mongodb`
* `redis`

If no profile is provided, an in-memory relational database will be used. If any other profile is provided, the appropriate database server must be started separately. Spring Boot will auto-configure a connection to the database using it's auto-configuration defaults. The connection parameters can be configured by setting the appropriate [Spring Boot properties](http://docs.spring.io/spring-boot/docs/current/reference/html/common-application-properties.html).

If more than one of these profiles is provided, the application will throw an exception and fail to start.



