curl http://localhost:3000/openapi.json > openapi.json
openapi-generator generate -i openapi.json -g typescript-fetch -o mobile/client --skip-validate-spec
