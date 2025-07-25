CREATE TABLE IF NOT EXISTS users (
    id BIGSERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    deleted_at TIMESTAMP,
);

CREATE TABLE INDEX IF NOT EXISTS users_unique_username_active
ON users (username)
WHERE deleted_at IS NULL;

CREATE TABLE IF NOT EXISTS user_emails (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL,
    email VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    verified_at TIMESTAMP,
    deleted_at TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX user_emails_unique_email_active
ON user_emails (email)
WHERE deleted_at IS NULL;
CREATE UNIQUE INDEX user_emails_unique_user_id_active
ON user_emails (user_id)
WHERE deleted_at IS NULL;

CREATE TABLE IF NOT EXISTS user_email_verification_tokens (
    id BIGSERIAL PRIMARY KEY,
    user_email_id BIGINT NOT NULL,
    token VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP NOT NULL,
    deleted_at TIMESTAMP,
    verified_at TIMESTAMP,

    FOREIGN KEY (user_email_id) REFERENCES user_emails(id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX user_email_verification_tokens_unique_user_email_id_active
ON user_email_verification_tokens (user_email_id)
WHERE deleted_at IS NULL AND verified_at IS NULL AND expires_at > CURRENT_TIMESTAMP;

CREATE TABLE IF NOT EXISTS user_password_hashes (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX user_password_hashes_unique_user_id_active
ON user_password_hashes (user_id)
WHERE deleted_at IS NULL;

CREATE TABLE IF NOT EXISTS user_password_reset_tokens (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL,
    token VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP NOT NULL,
    deleted_at TIMESTAMP,
    used_at TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX user_password_reset_tokens_unique_user_id_active
ON user_password_reset_tokens (user_id)
WHERE deleted_at IS NULL AND used_at IS NULL AND expires_at > CURRENT_TIMESTAMP;

CREATE TABLE IF NOT EXISTS user_refresh_tokens (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL,
    token VARCHAR(255) NOT NULL,
    parent_token_id BIGINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP NOT NULL,
    deleted_at TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (parent_token_id) REFERENCES user_refresh_tokens(id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX user_refresh_tokens_unique_parent_token_id
ON user_refresh_tokens (parent_token_id)
WHERE parent_token_id IS NOT NULL;

CREATE TABLE IF NOT EXISTS user_access_tokens (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL,
    token VARCHAR(255) NOT NULL,
    parent_token_id BIGINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP NOT NULL,
    deleted_at TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (parent_token_id) REFERENCES user_refresh_tokens(id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX user_access_tokens_unique_parent_token_id
ON user_access_tokens (parent_token_id)
WHERE parent_token_id IS NOT NULL;