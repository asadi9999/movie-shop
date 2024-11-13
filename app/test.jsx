import { useEffect, useState } from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function dbtest() {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const edu = await prisma.education.findMany();
        setEducationData(edu);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="h-screen">
      {educationData.map((edu) => (
        <div key={edu.id}>{edu.board}</div>
      ))}
    </div>
  );
}

export default dbtest;