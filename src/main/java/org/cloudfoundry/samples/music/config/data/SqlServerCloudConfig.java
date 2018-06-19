package org.cloudfoundry.samples.music.config.data;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.cloud.config.java.AbstractCloudConfig;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import javax.sql.DataSource;

@Configuration
@Profile({"sqlserver-cloud"})
public class SqlServerCloudConfig extends AbstractCloudConfig {

    private static final Logger logger = LoggerFactory.getLogger(SqlServerCloudConfig.class);
    @Bean
    @ConfigurationProperties("spring.datasource")
    public DataSource dataSource() {
        DataSource ds =  connectionFactory().dataSource();
        logger.info("DataSource is: " + ds.getClass());
        return ds;
    }

}
