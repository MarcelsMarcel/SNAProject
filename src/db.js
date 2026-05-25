cat > src/db.js << 'EOF'
import pkg from '@prisma/client'
const { PrismaClient } = pkg
const db = new PrismaClient()
export default db
EOF