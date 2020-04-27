import React, { useState } from 'react';
import Container from '../../components/Container/Container';
import Head from 'next/head';
import Navigation from '../../components/UI/Navigation/Navigation';
import Layout from '../../components/UI/Layout';

export default function SuggestMeJob() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    business_information: '',
    job_title: '',
    business_name: '',
  });

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: '',
        email: '',
        business_information: '',
        job_title: '',
        business_name: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Suggest me a job - Mohammadreza Qadamgahi Personal Blog</title>
        </Head>
        <Container>
          <Navigation />
          <main>
            <form className="w-full max-w-lg mx-auto" onSubmit={handleOnSubmit}>
              <h2 className="text-3xl mx-auto text-center ">
                GIVE ME A JOB OFFER
              </h2>
              <p className="text-lg font-mono text-gray-600 mx-auto text-center mb-3">
                > I'll answer to your offer, ASAP.
              </p>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Your Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="name"
                    placeholder="Tony Stark"
                    onChange={handleOnChange}
                    required
                    value={inputs.name}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Your Business Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="business_name"
                    placeholder="STARK Industries"
                    onChange={handleOnChange}
                    required
                    value={inputs.business_name}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Job title
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="job_title"
                    placeholder="Junior Avenger"
                    onChange={handleOnChange}
                    required
                    value={inputs.job_title}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    What is your business about?
                  </label>
                  <textarea
                    className="h-32 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="business_information"
                    placeholder="Describe your business more."
                    onChange={handleOnChange}
                    required
                    value={inputs.business_information}
                  />
                  <p className="text-gray-600 text-xs italic">
                    Make it as long and as crazy as you'd like
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Your Contact Information
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    placeholder="Ironman3000@gmail.com"
                    onChange={handleOnChange}
                    required
                    value={inputs.email}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mx-auto rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  disabled={status.submitting}
                >
                  {!status.submitting
                    ? !status.submitted
                      ? 'Submit'
                      : 'Submitted'
                    : 'Submitting...'}
                </button>
              </div>
            </form>
            {status.info.error && (
              <div className="error">Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && (
              <div className="success">{status.info.msg}</div>
            )}
          </main>
        </Container>
      </Layout>
    </>
  );
}
