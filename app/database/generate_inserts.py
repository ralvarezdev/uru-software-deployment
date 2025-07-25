import pandas as pd

def extract_texto_column(csv_file_path):
    """
    Extracts the text from the 'texto' column of a CSV file.

    Args:
        csv_file_path (str): The path to the CSV file.

    Returns:
        list: A list containing all the text entries from the 'texto' column,
              or None if the column is not found or an error occurs.
    """
    try:
        df = pd.read_csv(csv_file_path)
        if 'texto' in df.columns:
            result = []
            for text in df['texto']:
                replaced = str(text).replace(' -', '\n-')
                # Strip spaces from each line
                stripped = '\n'.join(
                    line.strip() for line in replaced.split('\n')
                    )
                result.append(stripped)
            return result
        else:
            print(f"Error: Column 'texto' not found in '{csv_file_path}'.")
            return None
    except FileNotFoundError:
        print(f"Error: CSV file not found at '{csv_file_path}'.")
        return None
    except Exception as e:
        print(f"An error occurred during CSV extraction: {e}")
        return None

def generate_sql_inserts(extracted_texts, table_name="jokes", user_id=None):
    """
    Generates SQL INSERT statements for the 'jokes' table.

    Args:
        extracted_texts (list): A list of text strings to be inserted into the 'content' column.
        table_name (str): The name of the table to insert into. Defaults to "jokes".
        user_id (int, optional): The user_id to associate with the joke. Defaults to None.
                                 If None, the user_id column will be omitted from the INSERT statement.

    Returns:
        list: A list of SQL INSERT statements.
    """
    insert_statements = []
    for text_content in extracted_texts:
        # Sanitize the text content to prevent SQL injection and syntax errors
        # This replaces single quotes with two single quotes (standard SQL escaping)
        sanitized_content = text_content.replace("'", "''")

        if user_id is not None:
            # Include user_id if provided
            insert_sql = (
                f"INSERT INTO {table_name} (user_id, content) "
                f"VALUES ({user_id}, '{sanitized_content}');"
            )
        else:
            # Exclude user_id if not provided
            insert_sql = (
                f"INSERT INTO {table_name} (content) "
                f"VALUES ('{sanitized_content}');"
            )
        insert_statements.append(insert_sql)
    return insert_statements

if __name__ == "__main__":
    csv_file = 'chistes_con_metadatos_curado.csv'
    target_table = 'jokes'

    # 1. Extract text from the 'texto' column
    extracted_text_list = extract_texto_column(csv_file)

    if extracted_text_list:
        print("Successfully extracted text from 'texto' column.")

        # 2. Generate SQL INSERT statements
        sql_inserts = generate_sql_inserts(extracted_text_list, table_name=target_table)

        # 3. Save SQL statements to a file
        print("\nGenerated SQL INSERT Statements.")
        output_sql_file = 'jokes_inserts.sql'
        try:
            with open(output_sql_file, 'w', encoding='utf-8') as f:
                for sql in sql_inserts:
                    f.write(sql + '\n')
            print(f"\nSQL INSERT statements saved to '{output_sql_file}'.")
        except IOError as e:
            print(f"Error saving SQL to file: {e}")