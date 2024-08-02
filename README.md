# sixth-floor
Aplicação web para cadastro de imóveis disponíveis para locação imobiliaria

# Pré-requisitos
Certifique-se de ter instalado: [Python](https://www.python.org/downloads/), [Node](https://nodejs.org/en/download/package-manager).

Clone o repositório do projeto:
```
git clone https://github.com/erickRochaIP/sixth-floor.git
cd sixth-floor
```

# Configuração inicial do server
```
cd server
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
```

# Configuração inicial do client
```
cd client
npm install
```

# Rodar o server
```
cd server
source env/bin/activate
cd sixthfloor
python3 manage.py runserver
```

# Rodar o client
```
cd client
cd sixthfloor
npx ng serve
```
