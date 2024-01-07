-- Users Table
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    job_position TEXT,
    bio TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Services Table
CREATE TABLE services (
    service_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    title VARCHAR(30),
    description VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contacts Table
CREATE TABLE contacts (
    user_id INTEGER PRIMARY KEY REFERENCES users(user_id),
    email VARCHAR(50) NOT NULL,
    linkedin_url VARCHAR(100),
    github_url VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Data
INSERT INTO users (full_name, job_position, bio) VALUES
    ('Dmytro Novikov', 'Software developer', 'CPP CPP');

INSERT INTO services (user_id, title, description) VALUES
    (1, 'Trading system automation', 'includes: auto-trading strategy');

INSERT INTO services (user_id, title, description) VALUES
    (1, 'Data Science', 'includes: data mining');

INSERT INTO services (user_id, title, description) VALUES
	(1, 'Web Development', 'includes: full-stack development');

INSERT INTO contacts (user_id, email, linkedin_url, github_url) VALUES
    (1, 'novvikovdmitry@gmail.com', 'https://www.linkedin.com/in/dmytro-noviikov/', 'https://github.com/shaxxeno');
