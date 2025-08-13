from google.cloud import documentai
import csv

SERVICE_ACCOUNT_PATH = "doc.json"

PROJECT_ID="1097669276125"
LOCATION="us"
PROCESSOR_ID="d811bf62ff936dd4"
FILE_PATH="timetable.jpg"
MIME_TYPE="image/jpeg"

client = documentai.DocumentProcessorServiceClient.from_service_account_file(SERVICE_ACCOUNT_PATH)

name = f"projects/{PROJECT_ID}/locations/{LOCATION}/processors/{PROCESSOR_ID}"

with open(FILE_PATH, "rb") as image:
    image_content = image.read()

#configuration
raw_document = documentai.RawDocument(content=image_content, mime_type=MIME_TYPE)
request = documentai.ProcessRequest(name=name, raw_document=raw_document)

#process
result = client.process_document(request=request)
document = result.document

cleaned_rows = []
max_cols = 0

tables = []
for page in document.pages:
    for table in page.tables:
        rows = []
        for row in list(table.header_rows) + list(table.body_rows):
            cells = []
            for cell in row.cells:
                text = "".join(document.text[segment.start_index:segment.end_index] for segment in cell.layout.text_anchor.text_segments)
                cells.append(text.strip())
            rows.append(cells)
        tables.append(rows)

for table in tables:
    for row in table:
        print(row)

#with open("timetable.csv", "w") as f:
   # writer=csv.writer(f)
    